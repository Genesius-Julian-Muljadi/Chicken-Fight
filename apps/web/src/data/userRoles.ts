interface RoleAccess {
  role: string;
  access: "all" | Array<string>;
}

const userRoles: Array<RoleAccess> = [
  {
    role: "master",
    access: "all",
  },
  {
    role: "admin",
    access: ["dashboard"],
  },
];

export type { RoleAccess };
export default userRoles;
