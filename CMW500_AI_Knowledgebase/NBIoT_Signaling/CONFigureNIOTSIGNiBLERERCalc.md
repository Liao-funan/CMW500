# CONFigureNIOTSIGNiBLERERCalc

Module: NBIoT Signaling
Source: 4a6ab9a9e58742b6.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Command Reference
 > 
BLER Measurement
 > 
Measurement Settings
 > 
CONFigure:NIOT:SIGN<i>:BLER:ERCalc
CONFigure:NIOT:SIGN<i>:BLER:ERCalc 
<Algorithm>
Selects the formula to be used for calculation of the BLER from the number of ACK, NACK and DTX.
Parameters:
<Algorithm>
ERC1 |
 
 ERC2 |
 
 ERC3 |
 
 ERC4
ERC1:
 
BLER = (NACK + DTX) / (ACK + NACK + DTX)
ERC2:
 
BLER = DTX / (ACK + NACK + DTX)
ERC3:
 
BLER = NACK / (ACK + NACK + DTX)
ERC4:
 
BLER = NACK / (ACK + NACK)
*RST:
ERC1
Example: 
See 
"Configuring a BLER Measurement"
Firmware/Software: 
V3.7.20
Manual operation: 
See 
"Error Ratio Calculation"
Top