import { Suspense } from "react";
import ForSchoolsClient from "./ForSchoolsClient";

export default function ForSchoolsPage() {
  return (
    <Suspense fallback={null}>
      <ForSchoolsClient />
    </Suspense>
  );
}
