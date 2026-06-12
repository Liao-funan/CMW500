# SOURceGPRFGENiSTATe

Module: GPRF Generator
Source: 344468105b06428e.htm

## 原始指令文档说明
GPRF Generator
 > 
Command Reference
 > 
Generator Control and States
 > 
SOURce:GPRF:GEN<i>:STATe
SOURce:GPRF:GEN<i>:STATe 
<Control>
Turns the generator on or off.
See also: 
"Generator Control"
Setting parameters: 
<Control>
ON |
 
 OFF
Switch generator 
ON
 or 
OFF
*RST:
OFF
Return values: 
<GeneratorState>
OFF |
 
 PENDing |
 
 ON |
 
 RDY
OFF:
 generator switched off
PEND:
 generator switched on but no signal available yet
ON:
 generator switched on, signal available
RDY:
 generator switched off, ARB file processing complete in smart channel mode
*RST:
OFF
Example: 
See 
"Generating a CW Signal"
Firmware/Software: 
V1.0.0.4, V3.7.11 added RDY
Manual operation: 
See 
"GPRF Generator (Softkey)"
Top