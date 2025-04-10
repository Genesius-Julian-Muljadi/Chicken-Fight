import ContactUsHeader from "./header";
import ContactUsLinks from "./links";

export default function ContactUs() {
  return (
    <div className="mt-24 flex flex-col items-center">
      <ContactUsHeader />
      <ContactUsLinks />
    </div>
  );
}
