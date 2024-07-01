import React from "react";
import { checkUser } from "../account/_action/account-action";

const OrganizationAccount = async () => {
  const user = await checkUser();

  if (!user) {
    return null;
  }
  return (
    <div className="flex justify-center items-center mt-4">
      <div className="max-w-[850px] border-[1px] p-4 rounded-xl">
        <h1 className="text-4xl"> Create An Organization</h1>
      </div>
    </div>
  );
};
export default OrganizationAccount;
