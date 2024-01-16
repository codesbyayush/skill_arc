import React from 'react'
import { Button } from '../ui/button';

type Props = {}

function Testcases({}: Props) {
  return (
    <>
      <div className='flex gap-2 flex-wrap'>
        <Button className="bg-lightBlackLeetcode brightness-125 hover:brightness-90 hover:bg-lightBlackLeetcode">
          Case 1
        </Button>
        <Button className="bg-lightBlackLeetcode brightness-125 hover:brightness-90 hover:bg-lightBlackLeetcode">
          Case 2
        </Button>
        <Button className="bg-lightBlackLeetcode brightness-125 hover:brightness-90 hover:bg-lightBlackLeetcode">
          Case 3
        </Button>
      </div>
      <div>
        <div className="py-3 flex flex-col gap-2 text-sm">
          <p>nums</p>
          <p className="bg-lightBlackLeetcode px-4 py-1.5 rounded">
            [ 2 , 7 , 11 , 15 ]
          </p>
        </div>

        <div className="py-3 flex flex-col gap-2 text-sm">
          <p>target</p>
          <p className="bg-lightBlackLeetcode px-4 py-1.5 rounded">9</p>
        </div>
      </div>
    </>
  );
}

export default Testcases