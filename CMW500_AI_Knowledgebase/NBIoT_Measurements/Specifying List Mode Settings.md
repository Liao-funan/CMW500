# Specifying List Mode Settings

Module: NBIoT Measurements
Source: b5e6b1485dd240bf.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Programming
 > 
Using the List Mode
 > 
Specifying List Mode Settings
Specifying List Mode Settings
// *****************************************************************************
// Segment 1, NPUSCH: format F1, 1 RU, 1 repetition, 1 SC - means 16 slots
// segment length 18 slots, power 1 dBm, frequency 1.95 GHz
// *****************************************************************************
CONF:NIOT:MEAS:MEV:LIST:SEGM1:SET 18,1,OB1,1.95E+9,F1,1,0,NRU01,NR1,ON,0
// *****************************************************************************
// Segment 2, NPUSCH: format F1, 1 RU, 2 repetitions, 12 SC - means 4 slots
// segment length 6 slots, power 3 dBm, frequency 1.95 GHz
// *****************************************************************************
CONF:NIOT:MEAS:MEV:LIST:SEGM2:SET 6,3,OB1,1.95E+9,F1,12,0,NRU01,NR2,IFPower,0
// *****************************************************************************
// Enable modulation results except phase error for both segments.
// Set statistical length to entire NPUSCH duration.
// *****************************************************************************
CONF:NIOT:MEAS:MEValuation:LIST:SEGMent1:MODulation 16,ON,ON,ON,OFF,ON,QPSK
CONF:NIOT:MEAS:MEValuation:LIST:SEGMent2:MODulation 4,ON,ON,ON,OFF,ON,QPSK
// *****************************************************************************
// Enable all spectrum emission results for segment 2.
// Enable the GSM ACLR results for segment 2 (no UTRA results).
// Set statistical length to entire NPUSCH duration.
// *****************************************************************************
CONFigure:NIOT:MEAS:MEValuation:LIST:SEGMent2:SEMask 4,ON
CONFigure:NIOT:MEAS:MEValuation:LIST:SEGMent2:ACLR 4,ON,OFF,ON
// *****************************************************************************
// Select both segments for measurement and evaluate retrigger flags.
// *****************************************************************************
CONFigure:NIOT:MEAS:MEValuation:LIST:LRANge 1,2
TRIGger:NIOT:MEAS:MEValuation:LIST:MODE SEGMent
// *****************************************************************************
// Only for measurements with R&S CMWS:
// Configure the RF input connector per segment.
// *****************************************************************************
CONFigure:NIOT:MEAS:MEValuation:LIST:CMWS:CMODe LIST
CONFigure:NIOT:MEAS:MEValuation:LIST:SEGMent1:CMWS:CONNector R11
CONFigure:NIOT:MEAS:MEValuation:LIST:SEGMent2:CMWS:CONNector R12
// *****************************************************************************
// Enable the list mode.
// *****************************************************************************
CONFigure:NIOT:MEAS:MEValuation:LIST ON
Top