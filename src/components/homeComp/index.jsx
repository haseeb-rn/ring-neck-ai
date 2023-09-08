import DemoScreenComp from "./demoScreen";
import { HomeWrapper } from "./element";
import { useState } from "react";
import RecorderComp from "./recorderComp";

function HomeComp() {
  const [showRecorder, setShowRecorder] = useState(false);
  return (
    <HomeWrapper>
      {showRecorder ? (
        <RecorderComp />
      ) : (
        <DemoScreenComp setShowRecorder={setShowRecorder} />
      )}
    </HomeWrapper>
  );
}

export default HomeComp;
