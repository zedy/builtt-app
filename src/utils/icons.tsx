type Props = {
  w: number;
  h: number;
  c?: string;
};

export function Logo({ w, h, c }: Props) {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 85 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        d="M37.3019 7.61936H41.3137V28.4962H37.3019V25.8762H37.2201C36.1146 27.4725 33.9458 29.0688 30.343 29.0688C26.4948 29.0688 23.384 26.8578 23.384 22.0689V7.61936H27.3958V20.9634C27.3958 23.7879 28.624 25.6705 31.653 25.6705C35.0909 25.6705 37.3019 23.5822 37.3019 20.4305V7.61812V7.61936ZM45.8162 28.495V7.61812H49.828V28.495H45.8162ZM49.8094 0.58109V4.55569H45.8348V0.58109H49.8094ZM54.3293 28.495V0.439804H58.3411V28.495H54.3293ZM72.259 25.2615V28.495C71.2353 28.6995 70.5809 28.7404 69.7208 28.7404C66.2816 28.7404 64.1946 27.4304 64.1946 22.6006V10.9346H61.1656V7.61936H64.1946V0.450958H68.2063V7.61936H72.2181V10.9346H68.2063V22.7233C68.2063 24.9343 68.8198 25.4251 70.54 25.4251C71.2353 25.4251 71.5637 25.3842 72.259 25.2615ZM84.9884 25.2615V28.495C83.9647 28.6995 83.3103 28.7404 82.4502 28.7404C79.0122 28.7404 76.9239 27.4304 76.9239 22.6006V10.9346H73.8949V7.61936H76.9239V0.450958H80.9357V7.61936H84.9474V10.9346H80.9357V22.7233C80.9357 24.9343 81.5504 25.4251 83.2694 25.4251C83.9647 25.4251 84.2931 25.3842 84.9884 25.2615ZM0.629578 3.29651V3.5295H0.958006V3.29651H0.629578ZM15.9417 15.2785V15.2067C18.0784 14.4829 19.9609 12.9981 19.9609 9.81177C19.9609 5.68597 16.8465 3.29651 11.5259 3.29651H4.61037V6.7357H11.7069C14.4211 6.7357 15.7967 8.11138 15.7967 10.3918C15.7967 12.6722 14.6751 14.0479 11.4169 14.0479H4.61161V6.7357H0.629578V25.7424H4.61161V17.1983H12.4307C15.1461 17.1983 16.8118 18.7562 16.8118 21.4703C16.8118 23.8957 15.7248 25.7424 11.8878 25.7424H4.61037V29.1816H12.1766C17.5343 29.1816 20.9735 26.5752 20.9735 21.6153C20.9735 17.7411 18.6559 15.752 15.9405 15.2798L15.9417 15.2785Z"
        fill={c}
      />
    </svg>
  );
}

export function Logo2({ w, h, c }: Props) {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Cart">
        <path
          id="Vector 5 (Stroke)"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.3716 1.66896L8.11852 4.17236L5.3685 7.17234L4.63135 6.49662L7.37979 3.49832L9.62828 1L10.3716 1.66896Z"
          fill={c}
        />
        <path
          id="Vector 6 (Stroke)"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.6284 1.66896L14.8815 4.17236L17.6315 7.17234L18.3687 6.49662L15.6202 3.49832L13.3717 1L12.6284 1.66896Z"
          fill={c}
        />
        <path
          id="Rectangle 5 (Stroke)"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 6.33449L3 21.3345H20L23 6.33449H0ZM1.2198 7.33449L3.8198 20.3345H19.1802L21.7802 7.33449H1.2198Z"
          fill={c}
        />
      </g>
    </svg>
  );
}
