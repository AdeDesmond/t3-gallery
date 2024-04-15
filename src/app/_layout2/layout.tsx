import React from "react";

interface LayoutTwoProps {
  children: React.ReactNode;
}
//this is a nested route and we will use this in the dashboard app
function LayoutTwo({ children }: LayoutTwoProps) {
  return (
    <div>
      <div>Second layout</div>
      <div>{children}</div>
    </div>
  );
}

export default LayoutTwo;
