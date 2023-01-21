import React from "react";

const OverseerList = (props) => {
  return (
    <section>
      <ul className="flex justify-center flex-col items-center space-y-4 justify-center sm:grid sm:gap-2 sm:grid-cols-3 md:grid-cols-4 md:mt-5">
        <li>
          <h3 className="font-semibold text-xl text-blue-600">{props.name}</h3>
          <h4 className="font-semibold text-sm text-gray-600">
            {props.title} <span className="ml-3">{props.age}</span>
          </h4>
          <p className="font-normal text-sm">
            A town hall different from bala blu, blue blu bulaba. broom broom
            broom brooooooooom. Bala blu blue blu bulaba.
          </p>
        </li>
        <li>
          <h3 className="font-semibold text-xl text-blue-600">{props.name}</h3>
          <h4 className="font-semibold text-sm text-gray-600">
            {props.title} <span className="ml-3">{props.age}</span>
          </h4>
          <p className="font-normal text-sm">
            A town hall different from bala blu, blue blu bulaba. broom broom
            broom brooooooooom. Bala blu blue blu bulaba.
          </p>
        </li>
        <li>
          <h3 className="font-semibold text-xl text-blue-600">{props.name}</h3>
          <h4 className="font-semibold text-sm text-gray-600">
            {props.title} <span className="ml-3">{props.age}</span>
          </h4>
          <p className="font-normal text-sm">
            A town hall different from bala blu, blue blu bulaba. broom broom
            broom brooooooooom. Bala blu blue blu bulaba.
          </p>
        </li>
        <li>
          <h3 className="font-semibold text-xl text-blue-600">{props.name}</h3>
          <h4 className="font-semibold text-sm text-gray-600">
            {props.title} <span className="ml-3">{props.age}</span>
          </h4>
          <p className="font-normal text-sm">
            A town hall different from bala blu, blue blu bulaba. broom broom
            broom brooooooooom. Bala blu blue blu bulaba.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default OverseerList;
