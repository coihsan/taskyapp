"use server";

import * as React from "react";
import { Sidebar } from "@/components/sidebar";
const OnboardingComponent = () => {

  const handleSubmit = (formData: FormData) => {
  };
  return (
    <div>
      <h1>Welcome</h1>
      <form action={handleSubmit}>
        <div>
          <label>Application Name</label>
          <p>Enter the name of your application.</p>
          <input type="text" name="applicationName" required />
        </div>

        <div>
          <label>Application Type</label>
          <p>Describe the type of your application.</p>
          <input type="text" name="applicationType" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default OnboardingComponent