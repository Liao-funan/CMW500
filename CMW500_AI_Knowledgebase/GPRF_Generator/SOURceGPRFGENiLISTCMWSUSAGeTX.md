# SOURceGPRFGENiLISTCMWSUSAGeTX

Module: GPRF Generator
Source: 57207cd6258044a7.htm

## 原始指令文档说明
GPRF Generator
 > 
Command Reference
 > 
List Mode Settings
 > 
SOURce:GPRF:GEN<i>:LIST:CMWS:USAGe:TX
SOURce:GPRF:GEN<i>:LIST:CMWS:USAGe:TX 
<Index>, <Usage>...
SOURce:GPRF:GEN<i>:LIST:CMWS:USAGe:TX? 
<Index>
Activates or deactivates the individual output connectors of connector benches for a selected entry of the GPRF generator list mode configuration.
The settings apply to all available benches. For benches with 4 connectors, only the first 4 values are relevant.
Parameters:
<Usage>
OFF |
 
 ON
Comma-separated list of n values, for the first n connectors of all benches, range for n = 1 to 8
A query returns 4 or 8 values, depending on the currently used bench.
*RST:
ON,ON,ON,ON,ON,ON,ON,ON
Parameters for setting and query: 
<Index>
Selects the entry of the list mode configuration
Range: 
0  to  1999
Example: 
See 
"Using the Generator List Mode"
Firmware/Software: 
V3.2.20
Manual operation: 
See 
"List"
Top