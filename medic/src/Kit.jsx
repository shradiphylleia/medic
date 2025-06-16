import React from 'react'
import Container from './Container'
import Heading from './Heading'
import './Kit.css'

function Kit() {
  return (
    <div>
        <Container className='kitCntr'>
        <Heading className="kit" text='Making a first aid kit'></Heading>
        
        <input type="checkbox" name="scissors" id='scissors' value='scissors'/>
        <label htmlFor="scissor">Scissors</label>
        <br />
        <br />
        
        <input type="checkbox" name="bandaid" id="bandaid" value='banaid'/>
        <label htmlFor="scissor">Bandaid</label>
        <br />
        <br />

        <input type="checkbox" name="mask" id='mask' value='mask'/>
        <label htmlFor="mask">Face mask</label>
        <br />
        <br />
        
        <input type="checkbox" name="pin" id="pin" value='pin'/>
        <label htmlFor="pin">Safety pin</label>
        <br />
        <br />

        <input type="checkbox" name="antacid" id='antacid' value='antacid'/>
        <label htmlFor="antacid">Antacid</label>
        <br />
        <br />

        <input type="checkbox" name="antiseptic" id="antiseptic" value='antiseptic'/>
        <label htmlFor="antiseptic">Antiseptic Liquid</label>
        <br />
        <br />

        <input type="checkbox" name="mosquito" id='mosquito' value='mosquito'/>
        <label htmlFor="mosquito">Mosquito repellent</label>
        <br />
        <br />
        
        <input type="checkbox" name="bud" id="bud" value='bud'/>
        <label htmlFor="bud">Cotton bud</label>
        <br />
        <br />

        <input type="checkbox" name="pad" id='pad' value='pad'/>
        <label htmlFor="pad">Dressing Pad</label>
        <br />
        <br />

        <input type="checkbox" name="bandage" id="bandage" value='bandage'/>
        <label htmlFor="bandage">Bandage roll</label>
        <br />
        <br />

        <input type="checkbox" name="cold" id='cold' value='cold'/>
        <label htmlFor="cold">Cold Pack</label>
        <br />
        <br />
        
        <input type="checkbox" name="hot" id="hot" value='hot'/>
        <label htmlFor="hot">Hot pack</label>
        <br />
        <br />

        <input type="checkbox" name="scissors" id='scissors' value='scissors'/>
        <label htmlFor="scissor">Whistle</label>
        <br />
        <br />


        </Container>
    </div>
  )
}

export default Kit