/* eslint-disable import/no-anonymous-default-export */
import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge'
};

export default function () {
  return new ImageResponse(
    (
      <div tw="flex flex-row items-center justify-center w-full h-full bg-white">
        <svg
          style={{
            width: '72px',
            height: '72px',
            fontWeight: 'bold'
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 233.57 273.09"
        >
          <path d="M75.4,225.27c-5.09-2.72-9.73-5.22-14.39-7.68-17.65-9.31-35.24-18.76-53.01-27.83C2.38,186.89-.02,182.98,0,176.73c.13-36,.11-71.99,.02-107.99-.01-5.9,1.95-9.91,7.48-12.79C42.05,38,76.48,19.81,110.9,1.6c4.07-2.15,7.68-2.13,11.77,.03,34.26,18.11,68.55,36.19,102.95,54.03,5.86,3.04,7.97,7.19,7.94,13.54-.15,35.83-.15,71.66,0,107.49,.02,6.24-2.34,10.14-7.92,13.07-51.58,27-103.06,54.18-154.58,81.29-5.82,3.06-10.14,2.66-13.65-1.08-3.34-3.56-3.44-7.58-.17-13.27,5.94-10.36,11.94-20.69,18.14-31.43ZM128.63,26.67c0,8.34,.18,15.8-.07,23.24-.14,3.95,1.03,6.15,4.8,8.05,16.72,8.45,33.22,17.33,50.43,26.4-2.31,1.29-3.99,2.27-5.71,3.18-15.31,8.08-30.64,16.1-45.89,24.27-1.42,.76-3.31,2.4-3.36,3.68-.3,8.58-.16,17.17-.16,25.94,1.13-.13,1.67-.05,2.06-.25,26.95-14.17,53.91-28.31,80.76-42.65,1.33-.71,2.45-3.04,2.53-4.68,.29-5.98-.1-12,.16-17.99,.14-3.34-1.11-4.97-4.04-6.49-21.4-11.11-42.69-22.45-64.03-33.69-5.54-2.92-11.13-5.73-17.49-9.01Zm-23.9,1.09c-1.3,.17-1.67,.12-1.94,.26-26.82,14.07-53.64,28.11-80.37,42.34-1.34,.72-2.46,3.07-2.55,4.72-.31,5.98,.02,11.99-.22,17.97-.12,3.1,.99,4.79,3.71,6.21,24.94,13,49.81,26.13,74.71,39.2,1.99,1.04,4.05,1.96,6.69,3.22,0-8.43-.14-16.06,.07-23.69,.08-3.05-.83-4.8-3.63-6.22-10.98-5.57-21.83-11.39-32.72-17.14-6.12-3.23-12.23-6.49-18.97-10.07,1.65-.97,2.57-1.57,3.55-2.09,15.89-8.39,31.81-16.72,47.66-25.2,1.58-.84,3.78-2.51,3.84-3.87,.36-8.42,.18-16.87,.18-25.64Z" />
        </svg>
        <h1 tw="font-bold text-4xl ml-4">What should I build next?</h1>
      </div>
    ),
    {
      width: 1200,
      height: 600
    }
  );
}