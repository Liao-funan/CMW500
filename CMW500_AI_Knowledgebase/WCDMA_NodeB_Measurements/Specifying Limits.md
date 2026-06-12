# Specifying Limits

Module: WCDMA NodeB Measurements
Source: b77dc5ec5f914202.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Programming
 > 
Specifying Limits
Specifying Limits
// *****************************************************************************
// Define modulation limits.
// *****************************************************************************
CONFigure:WCDMa:MEAS:NB:MEValuation:LIMit:EVMagnitude 20, 40
CONFigure:WCDMa:MEAS:NB:MEValuation:LIMit:MERRor 20, OFF
CONFigure:WCDMa:MEAS:NB:MEValuation:LIMit:PERRor 20, OFF
CONFigure:WCDMa:MEAS:NB:MEValuation:LIMit:CFERror 0.15
CONFigure:WCDMa:MEAS:NB:MEValuation:LIMit:IQOFfset -26
CONFigure:WCDMa:MEAS:NB:MEValuation:LIMit:IQIMbalance -50
// *****************************************************************************
// Define peak code domain error limit.
// *****************************************************************************
CONFigure:WCDMa:MEAS:NB:MEValuation:LIMit:CDERror -20
// *****************************************************************************
// Define spectrum limits: for ACLR, OBW and spectrum emission. 
// Enable limit check for relative spectrum emission limits
// *****************************************************************************
CONFigure:WCDMa:MEAS:NB:MEValuation:LIMit:ACLR:ABSolute -40
CONFigure:WCDMa:MEAS:NB:MEValuation:LIMit:ACLR:RELative -30, -40
CONFigure:WCDMa:MEAS:NB:MEValuation:LIMit:OBW 10E6
CONFigure:WCDMa:MEAS:NB:MEValuation:LIMit:EMASk:RELative -50,-40,
    -50,-60,-50,-40,-50,-60,-50,-40
CONFigure:WCDMa:MEAS:NB:MEValuation:LIMit:EMASk:ABSolute -25,-25,
-21,-21,-34,-34,-34,-22,-22,-22
CONFigure:WCDMa:MEAS:NB:MEV:LIMit:EMASk:RELative:ENABle ON,ON,ON,ON,ON
Top