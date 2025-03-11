"use client";

import { Field, Form, Formik, FormikProps } from "formik";
import { LoginSchema } from "@/lib/validationSchemas/loginSchema";
import { LoginUser } from "@/interfaces/forms/login";
import axios from "axios";
import ErrorHandler from "@/errorhandler/error-handler";
import Swal from "sweetalert2";
import BasicSpinner from "../../assets/BasicSpinner/BasicSpinner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Provider, useDispatch } from "react-redux";
import { store } from "@/redux/store";
import { updateCookie } from "@/redux/slices/updateCookie";
import COOKIE_EXPIRATION_MINUTES from "../../../../cookieExpiration";
import { updateHeaderLinks } from "@/redux/slices/updateHeaderLinks";
import headerNavLinksLoggedIn from "@/data/headerNavLinksLoggedIn";

function AdminLogin() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useDispatch();

  // User must request key from creator. If key's password is empty, postLogin turns into registration
  const postLogin = async (params: LoginUser) => {
    try {
      const API: string = process.env.NEXT_PUBLIC_BASE_API_URL + "/auth/login";
      const output = await axios.post(
        API,
        {
          regkey: params.regkey,
          password: params.password,
        },
        { withCredentials: true }
      );

      console.log(output);
      if (!output) throw Error();

      Swal.fire({
        icon: "success",
        title: output.data.message as string,
      });
      // Vercel cookie issue fix
      document.cookie = `access_token=${output.data.cookie}; expires=${new Date(
        new Date().valueOf() + COOKIE_EXPIRATION_MINUTES * 60000
      )}`;

      router.push("/admin/dashboard");
      dispatch(updateCookie(String(output.data.cookie)));
      dispatch(updateHeaderLinks(headerNavLinksLoggedIn))
      setSubmitted(false);
    } catch (err) {
      setSubmitted(false);
      ErrorHandler(err);
    }
  };

  return (
    <div className="flex min-h-screen h-auto w-auto flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-bold">Admin Access</h1>
      <Formik
        initialValues={{
          regkey: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          setSubmitted(true);
          postLogin(values);
        }}
      >
        {(props: FormikProps<LoginUser>) => {
          const { values, errors, touched, handleChange } = props;

          return (
            <Form className="flex w-[85%] flex-col gap-3 rounded-xl bg-backtheme-200/20 dark:bg-backtheme-900 px-6 py-8 shadow-lg md:w-[75%] lg:w-[65%] xl:w-[60%] sm:p-12">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="regkey"
                  className="text-sm font-semibold text-black dark:text-white"
                >
                  Registration Key{" "}
                </label>
                <Field
                  type="text"
                  name="regkey"
                  onChange={(e: any) => {
                    handleChange(e);
                  }}
                  values={values.regkey}
                  placeholder="Ask site creator for registration key"
                  disabled={submitted}
                  aria-label="Admin registration key text box"
                  className="mt-2 flex h-10 w-full items-center rounded bg-gray-100 px-3 text-sm text-black border dark:border-none focus:outline-1 focus:ring-zinc-600 sm:h-12 sm:px-4 sm:text-base"
                />
                {touched.regkey && errors.regkey ? (
                  <div className="text-xs text-red-600">{errors.regkey}</div>
                ) : null}
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-black dark:text-white"
                >
                  Password{" "}
                </label>
                <Field
                  type="password"
                  name="password"
                  onChange={handleChange}
                  values={values.password}
                  placeholder="Type password here"
                  disabled={submitted}
                  aria-label="Password text box"
                  className={`mt-2 flex h-10 w-full items-center rounded bg-gray-100 px-3 text-sm text-black border dark:border-none focus:outline-1 focus:ring-zinc-600 sm:h-12 sm:px-4 sm:text-base`}
                />
                {touched.password && errors.password ? (
                  <div className="text-xs text-red-600">{errors.password}</div>
                ) : null}
              </div>
              <div className="relative mt-8">
                <button
                  type="submit"
                  className="mx-auto flex h-12 items-center justify-center rounded-lg uppercase bg-blue-400 dark:bg-blue-600 px-6 text-sm font-semibold text-black dark:text-blue-gray-100 shadow-sm shadow-slate-400 hover:bg-blue-700 sm:w-64"
                  aria-label="Log in button"
                >
                  Log in
                </button>
                <div
                  className={`${
                    submitted ? "" : "hidden "
                  }absolute right-[15%] top-1/4 transform`}
                >
                  <BasicSpinner size={8} />
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default function AdminLoginProvider() {
  return (
    <Provider store={store}>
      <AdminLogin />
    </Provider>
  );
}
