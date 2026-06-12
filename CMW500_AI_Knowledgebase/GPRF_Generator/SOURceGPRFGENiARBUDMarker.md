# SOURceGPRFGENiARBUDMarker

Module: GPRF Generator
Source: e003b9f012e04b63.htm

## 原始指令文档说明
GPRF Generator
 > 
Command Reference
 > 
ARB Settings
 > 
SOURce:GPRF:GEN<i>:ARB:UDMarker
SOURce:GPRF:GEN<i>:ARB:UDMarker 
<Period>, <StartState>, <Positions>(8)
Defines the marker period plus up to 8 marker events relative to the processed waveform file. The user-defined marker is available as an ARB output trigger source.
Example:
 The command 
SOURce:GPRF:GEN<i>:ARB:UDMarker 30, FEDG, 0, 2, 4, 6, 8, 10, OFF, OFF
 sets the user-defined marker as follows:
Parameters:
<Period>
Period of the user-defined marker sequence
Range: 
1  to  1E+9
*RST:
1
<StartState>
REDGe |
 
 FEDGe
Polarity of marker pulses (first transition)
*RST:
REDG
<Positions>
Positions of marker signals. Eight values must be specified; the first value must be 0.
Range: 
0 (pos. 0) or 1 (other positions)  to  max. (must not exceed the <Period>). OFF disables a position.
*RST:
0 (pos. 1) or OFF (other positions)
Example: 
See 
"Using the Arbitrary Mode"
Firmware/Software: 
V1.0.15.0
Manual operation: 
See 
"User Defined Marker"
Top