import React, { useEffect } from "react";

function OwnerPage() {
  return (
    <div className="flex flex-col items-center my-16 gap-8">
      <div className="text-3xl">Windsurf - Group D - 37</div>

      <div className="w-1/4 rounded-3xl overflow-hidden hover:scale-110 ">
        <img src="../IMG_20231202_163051_640.jpg" />
      </div>

      <div className="text-2xl">Short Biography</div>
      <p className="text-xl w-5/6">
        As a recent graduate of the Junior Software Development Bootcamp in
        Thailand and currently studying at SIM Singapore Institute of
        Management, I am eager to leverage my skills in HTML, CSS, SQLite,
        GitHub, JavaScript, and React to contribute to a dynamic IT development
        team. I am seeking opportunities to develop my technical abilities
        further and gain hands-on software development experience.
      </p>
    </div>
  );
}

export default OwnerPage;
