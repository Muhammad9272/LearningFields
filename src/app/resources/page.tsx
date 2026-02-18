import { Suspense } from "react";
import ResourcesClient from "./ResourcesClient";

export default function ResourcesPage() {
  return (
    <Suspense fallback={null}>
      <ResourcesClient />
    </Suspense>
  );
}
