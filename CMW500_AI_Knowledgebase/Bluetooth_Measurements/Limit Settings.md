# Limit Settings

Module: Bluetooth Measurements
Source: dc98cdb6ba564f8f.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Programming
 > 
Limit Settings
Limit Settings
// *************************************************************************
// Define and enable common timing error limit
// *************************************************************************
CONFigure:BLUetooth:MEAS:MEValuation:LIMit:PVTime -10,10,ON
// *************************************************************************
// Define limits and enable limit check for BR packets
// *************************************************************************
CONFigure:BLUetooth:MEAS:MEValuation:LIMit:BRATe:PVTime
   -6.0,4.0,23.0,ON,ON,ON,ON,ON,ON,ON,ON
CONFigure:BLUetooth:MEAS:MEValuation:LIMit:BRATe:DELTa 115E+3, ON
CONFigure:BLUetooth:MEAS:MEValuation:LIMit:BRATe:MRATio 8E-1, ON
CONFigure:BLUetooth:MEAS:MEValuation:LIMit:BRATe:FACCuracy 
   75E+3, ON, ON, ON
CONFigure:BLUetooth:MEAS:MEValuation:LIMit:BRATe:FDRift:APACkets 
   25E+3,25E+3,40E+3,20E+3,ON,ON,ON,ON,ON,ON,ON,ON,ON,ON,ON,ON
CONFigure:BLUetooth:MEAS:MEValuation:LIMit:BRATe:DMINimum 
   115E+3, 175E+3, 115E+3, 175E+3, ON, ON, ON, ON, ON, ON, ON, ON
CONFigure:BLUetooth:MEAS:MEValuation:LIMit:BRATe:DMAXimum 
   115E+3, 175E+3, 115E+3, 175E+3, ON, ON, ON, ON, ON, ON, ON, ON
CONFigure:BLUetooth:MEAS:MEValuation:LIMit:BRATe:DAVerage 
   115E+3, 175E+3, 115E+3, 175E+3, ON, ON, ON, ON, ON, ON, ON, ON
CONFigure:BLUetooth:MEAS:MEValuation:LIMit:SOBW 0.0E+0,1.0E+6,1.5E+6,ON,OFF
CONFigure:BLUetooth:MEAS:MEValuation:LIMit:FRANge -5E+6,5E+6,ON,ON
CONFigure:BLUetooth:MEAS:MEValuation:LIMit:SACP -20.0,-30.0,3,ON,ON
// *************************************************************************
// Define limits and enable limit check for EDR packets
// *************************************************************************
CONFigure:BLUetooth:MEAS:MEValuation:LIMit:EDRATe:PVTime
   -4.0,1.0,4.75,5.25,ON,ON,ON,ON,ON,ON,ON,ON
CONFigure:BLUetooth:MEAS:MEValuation:LIMit:EDRate:FSTability?
CONFigure:BLUetooth:MEAS:MEValuation:LIMit:EDRate:DQPSk:DEVM?
CONFigure:BLUetooth:MEAS:MEValuation:LIMit:EDRate:DPSK:DEVM?
CONFigure:BLUetooth:MEAS:MEValuation:LIMit:EDRate:FSTability 
   75E+3, 10E+3, 75E+3, ON, ON, ON, ON, ON, ON, ON, ON, ON
CONFigure:BLUetooth:MEAS:MEValuation:LIMit:EDRate:DQPSk:DEVM 
   0.2, 0.35, 0.3, ON, ON, ON, ON, ON, ON, ON
CONFigure:BLUetooth:MEAS:MEValuation:LIMit:EDRate:DPSK:DEVM 
   0.13, 0.25, 0.2, ON, ON, ON, ON, ON, ON, ON
CONFigure:BLUetooth:MEAS:MEValuation:LIMit:SGACp 
   -1.900000E+001,-3.800000E+001,3,-2.600000E+001,-2.600000E+001,OFF,OFF,ON,ON
CONFigure:BLUetooth:MEAS:MEValuation:LIMit:EDRate:PENCoding 0.85 ON
// *************************************************************************
// Define limits and enable limit check for LE 1M PHY
// *************************************************************************
CONFigure:BLUetooth:MEAS:MEValuation:LIMit:LENergy:LE1M:PVTime
   -20.0, 10.0, 3.0, ON, ON, ON, ON, ON, ON, ON, ON
CONFigure:BLUetooth:MEAS:MEValuation:LIMit:LENergy:DELTa 115E+3, ON
CONFigure:BLUetooth:MEAS:MEValuation:LIMit:LENergy:LE1M:MRATio 8E-1, ON
CONFigure:BLUetooth:MEAS:MEValuation:LIMit:LENergy:LE1M:FACCuracy 
   75E+3, ON, ON, ON
CONFigure:BLUetooth:MEAS:MEValuation:LIMit:LENergy:LE1M:FOFFset 
   150E+3, ON, ON, ON
CONFigure:BLUetooth:MEAS:MEValuation:LIMit:LENergy:LE1M:FDRift 
   50E+003,20E+3,20E+3,ON,ON,ON,ON,ON,ON,ON,ON,ON
CONFigure:BLUetooth:MEAS:MEValuation:LIMit:LENergy:DMINimum 
   225E+3, 275E+3, OFF, OFF, OFF, OFF
CONFigure:BLUetooth:MEAS:MEValuation:LIMit:LENergy:DMAXimum 
   225E+3, 275E+3, OFF, OFF, OFF, OFF
CONFigure:BLUetooth:MEAS:MEValuation:LIMit:LENergy:DAVerage 
   225E+3, 275E+3, ON, ON, ON, ON
CONFigure:BLUetooth:MEAS:MEValuation:LIMit:LENergy:LE1M:SACP 
   -20.0,-40.0,3,ON,ON
WAITKEY >Limit settings completed, press "OK" to start single-shot measurement<
Top