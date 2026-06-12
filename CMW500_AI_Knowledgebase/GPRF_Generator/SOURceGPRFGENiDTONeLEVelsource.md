# SOURceGPRFGENiDTONeLEVelsource

Module: GPRF Generator
Source: 24f343ec2a614985.htm

## 原始指令文档说明
GPRF Generator
 > 
Command Reference
 > 
Baseband Settings
 > 
SOURce:GPRF:GEN<i>:DTONe:LEVel<source>?
SOURce:GPRF:GEN<i>:DTONe:LEVel<source>? 
Queries the output level of the source signal <source>. The output level is a function of the generator output level (see 
SOURce:
​
GPRF:
​
GEN<i>:
​
RFSettings:
​
LEVel
) and the ratio (see 
SOURce:
​
GPRF:
​
GEN<i>:
​
DTONe:
​
RATio
).
Suffix: 
<source>
1..2
No. of source signal
Return values: 
<Level>
Range: 
-160.00 dBm to 0.00 dBm at RF 1 COM and RF 2 COM, -150 dBm to 13 dBm at RF 1 OUT; notice the ranges quoted in the data sheet
Increment: 
0.01 dB
Default unit: 
dBm
Example: 
See 
"Generating a Dual-Tone Signal"
Usage: 
Query only
Firmware/Software: 
V1.0.0.4
Manual operation: 
See 
"Baseband Configuration > Dual Tone > Ratio / Level (RMS)"
Top