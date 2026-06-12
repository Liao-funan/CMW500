# SOURceGPRFGENiLISTCMWSCSET

Module: GPRF Generator
Source: e518f5e017eb44f4.htm

## 原始指令文档说明
GPRF Generator
 > 
Command Reference
 > 
List Mode Settings
 > 
SOURce:GPRF:GEN<i>:LIST:CMWS:CSET
SOURce:GPRF:GEN<i>:LIST:CMWS:CSET 
<CMWSConnectorSet>
Specifies how the active RF connectors of a connector bench are selected for the GPRF generator list mode.
Parameters:
<CMWSConnectorSet>
GLOBal |
 
 LIST
GLOBal:
 The same connectors are active for all list entries. They are activated in the same way as without list mode. See 
CONFigure:
​
GPRF:
​
GEN<i>:
​
CMWS:
​
USAGe:
​
TX
 and 
CONFigure:
​
GPRF:
​
GEN<i>:
​
CMWS:
​
USAGe:
​
TX:
​
ALL
.
LIST:
 The connectors are activated individually per list entry. See 
SOURce:
​
GPRF:
​
GEN<i>:
​
LIST:
​
CMWS:
​
USAGe:
​
TX
.
*RST:
GLOB
Example: 
See 
"Using the Generator List Mode"
Firmware/Software: 
V3.2.20
Manual operation: 
See 
"CMWS Connector Set"
Top