# Configuring a BLER Measurement

Module: NBIoT Signaling
Source: 7a522fcf8d204daa.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Programming
 > 
BLER Tests
 > 
Configuring a BLER Measurement
Configuring a BLER Measurement
// *****************************************************************************
// Configure a continuous BLER measurement with
// 1000 transmissions per measurement cycle.
// NACK and DTX contribute to the BLER.
// *****************************************************************************
CONFigure:NIOT:SIGN:BLER:REPetition CONT
CONFigure:NIOT:SIGN:BLER:SAMPles 1000
CONFigure:NIOT:SIGN:BLER:ERCalc ERC1
Top