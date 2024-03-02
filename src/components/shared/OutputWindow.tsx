"use client"

import React from "react"

type OutputProps = {
    outputDetails:any;
}

const OutputWindow = ({outputDetails}:OutputProps) => {
    const getOutput = () => {
        let statusId = outputDetails?.status?.id;

        if (statusId === 6 ) {
            // compilation error
            return (
                <pre>
                    {atob(outputDetails?.compile_output)}
                </pre>
            );
        } else if (statusId === 3) {
            return (
              <pre className="px-2 py-1 font-normal text-xs text-green-500">
                {atob(outputDetails.stdout) !== null
                  ? `${atob(outputDetails.stdout)}`
                  : null}
              </pre>
            );
          }  else if (statusId === 5) {
            return (
                <pre>
                    {"Time Limit Exceeded"}
                </pre>
            );
        } else {
            return (
                <pre>
                    {atob(outputDetails?.stderr)}
                </pre>
            );
        }
    }
  return (
    <div>
        <h1>Output</h1>
        <div>
            {outputDetails ? (
                <>
                {getOutput()}
                </>
            ) : null}
        </div>
    </div>
  )
}

export default OutputWindow