import "./../app.css";
const Rocket = (props) => {
  const { fill, colors, dimensions } = props;
  return (
    <svg
      viewBox="0 0 63 108"
      height={dimensions.height}
      width={dimensions.width}
      xmlns="http://www.w3.org/2000/svg"
      transform="matrix(1 0 0 0.9 0 1)"
    >
      <path
        onClick={() => fill(0)}
        fill={colors[0]}
        d="M21.2012 11.6422C19.9406 13.2876 18.7837 15.006 17.7498 16.7908C9.77615 30.5558 11.9802 53.4161 16.7345 62.1794C21.4887 70.9428 25.8687 74.4988 25.8687 74.4988H36.6938C36.6938 74.4988 42.0565 70.6754 46.8428 61.8549C51.6292 53.0344 53.6349 30.952 46.5042 17.1148C45.5342 15.2324 44.4393 13.4102 43.235 11.6565C40.3037 13.9272 36.347 15.2016 32.223 15.2034C28.0931 15.1998 24.132 13.9199 21.2012 11.6422Z"
        stroke="black"
        strokeWidth="1.12889"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.5941 75.0338C23.4408 78.4702 22.1664 82.4524 21.9247 86.5005C21.4491 94.4661 25.1865 102.564 31.5567 107.37C37.2906 101.963 40.4114 93.9004 39.8127 86.0418C39.5258 82.2752 38.4229 78.5728 36.6021 75.2631L25.5941 75.0338V75.0338Z"
        onClick={() => fill(1)}
        fill={colors[1]}
        stroke="black"
        strokeWidth="1.12889"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.5941 75.0338C25.2119 77.1579 25.2907 79.3637 25.8234 81.4552C26.6829 84.8296 28.7467 87.884 31.5568 89.9405C33.8883 87.8967 35.5891 85.143 36.3728 82.1431C36.9575 79.9047 37.0365 77.5356 36.6021 75.2631L25.5941 75.0338V75.0338Z"
        onClick={() => fill(2)}
        fill={colors[2]}
        stroke="black"
        strokeWidth="1.12889"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36.2669 72.5289H26.1763C24.9097 72.5289 23.8829 73.5557 23.8829 74.8223C23.8829 76.0888 24.9097 77.1156 26.1763 77.1156H36.2669C37.5335 77.1156 38.5603 76.0888 38.5603 74.8223C38.5603 73.5557 37.5335 72.5289 36.2669 72.5289Z"
        onClick={() => fill(3)}
        fill={colors[3]}
        stroke="black"
        strokeWidth="1.12889"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.6759 38.3938C35.1243 38.3938 37.9198 35.4894 37.9198 31.9067C37.9198 28.3239 35.1243 25.4196 31.6759 25.4196C28.2275 25.4196 25.432 28.3239 25.432 31.9067C25.432 35.4894 28.2275 38.3938 31.6759 38.3938Z"
        onClick={() => fill(4)}
        fill={colors[4]}
        stroke="black"
        strokeWidth="1.12889"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.3821 11.7805C24.4969 7.37515 28.4267 3.54499 32.9247 0.564453C36.8772 3.72797 40.2959 7.55416 43.011 11.8267C40.1037 13.9907 36.2428 15.2016 32.223 15.2034C28.1775 15.1999 24.2939 13.9717 21.3821 11.7805Z"
        onClick={() => fill(5)}
        fill={colors[5]}
      />
      <path
        d="M21.3821 11.7805C24.4969 7.37515 28.4267 3.54499 32.9247 0.564453C36.8772 3.72797 40.2959 7.55416 43.011 11.8267C40.1037 13.9907 36.2428 15.2016 32.223 15.2034C28.1775 15.1999 24.2939 13.9717 21.3821 11.7805Z"
        onClick={() => fill(6)}
        fill={colors[6]}
      />
      <path
        d="M32.9247 0.564453C28.4267 3.54499 24.4969 7.37515 21.3821 11.7805C24.2939 13.9717 28.1775 15.1999 32.223 15.2034C36.2428 15.2016 40.1037 13.9907 43.011 11.8267C40.2959 7.55416 36.8772 3.72797 32.9247 0.564453Z"
        onClick={() => fill(7)}
        fill={colors[7]}
        stroke="black"
        strokeWidth="1.12889"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.7793 57.3181C11.4987 60.3362 8.5498 63.7151 6.00563 67.3756C4.50369 69.5366 3.13583 71.8079 2.17139 74.2564C1.20694 76.705 0.654136 79.3438 0.816408 81.9704C0.967039 84.4086 1.74025 86.8058 3.04265 88.8725C4.34506 90.9393 6.17397 92.6712 8.30851 93.8592C7.16387 89.2809 7.61745 84.3193 9.57322 80.0244C10.8688 77.1795 12.908 74.5471 15.7354 73.2136C17.3992 72.429 19.2876 72.1278 21.1129 72.3559C22.5066 72.5301 23.86 73.0125 25.054 73.7517C23.5704 72.3028 20.2551 68.6689 16.7345 62.1794C16.0157 60.8545 15.3552 59.2073 14.7793 57.3181Z"
        onClick={() => fill(8)}
        fill={colors[8]}
        stroke="black"
        strokeWidth="1.12889"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38.5452 72.9166C39.6712 72.2688 40.9297 71.8504 42.2214 71.7099C44.3775 71.4754 46.6099 72.0171 48.4187 73.2136C50.8948 74.8516 52.461 77.5778 53.4182 80.3881C54.8676 84.6439 55.0994 89.3069 54.0791 93.6855C57.9809 91.324 60.7709 87.2041 61.5155 82.7045C61.9543 80.053 61.7096 77.3131 61.0007 74.7207C60.2918 72.1283 59.1275 69.6763 57.7384 67.3756C55.3713 63.4553 52.3313 59.9435 48.7973 57.0314C48.2236 58.8918 47.5649 60.5242 46.8428 61.8549C43.8019 67.4589 40.5283 71.0458 38.5452 72.9166Z"
        onClick={() => fill(9)}
        fill={colors[9]}
        stroke="black"
        strokeWidth="1.12889"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Rocket;
