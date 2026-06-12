# Specifying List Mode Settings

Module: WCDMA Measurements
Source: 3e0766fccba24313.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Programming
 > 
Using WCDMA List Mode
 > 
Specifying List Mode Settings
Specifying List Mode Settings
// *****************************************************************************
// Define 2 segments with a length of 20 timeslots each
// and different analyzer settings.
// *****************************************************************************
CONFigure:WCDMa:MEAS:MEValuation:LIST:COUNt 2 
CONFigure:WCDMa:MEAS:MEValuation:LIST:SEGMent1:SETup 20, 1, 19.41E+8, OFF
CONFigure:WCDMa:MEAS:MEValuation:LIST:SEGMent2:SETup 20, -10, 19.42E+8, OFF
 
// *****************************************************************************
// Enable code domain results, UE power results and phase discontinuity results
// for all segments, modulation and spectrum results for segment 2 only.
// Select an averaging length of 20 (all measured slots in the segment).
// Set the evaluation offset to 0 slots.
// *****************************************************************************
CONFigure:WCDMa:MEAS:MEValuation:LIST:SEGMent1:CDPower 20,ON,ON,ON
CONFigure:WCDMa:MEAS:MEValuation:LIST:SEGMent2:CDPower 20,ON,ON,ON
CONFigure:WCDMa:MEAS:MEValuation:LIST:SEGMent1:UEPower ON
CONFigure:WCDMa:MEAS:MEValuation:LIST:SEGMent2:UEPower ON
CONFigure:WCDMa:MEAS:MEValuation:LIST:SEGMent1:PHD ON
CONFigure:WCDMa:MEAS:MEValuation:LIST:SEGMent2:PHD ON
CONFigure:WCDMa:MEAS:MEValuation:LIST:SEGMent2:MODulation 20,ON,ON,ON,ON,ON,ON
CONFigure:WCDMa:MEAS:MEValuation:LIST:SEGMent2:SPECtrum 20,ON,ON,ON
CONFigure:WCDMa:MEAS:MEValuation:LIST:EOFFset 0
// *****************************************************************************
// Use a power trigger without retriggering to start the measurement.
// *****************************************************************************
TRIGger:WCDMa:MEAS:MEValuation:LIST:MODE ONCE
TRIGger:WCDMa:MEAS:MEValuation:SOURce 'IF POWer'
// *****************************************************************************
// Only for measurements with R&S CMWS:
// Configure the RF input connector per segment.
// *****************************************************************************
CONFigure:WCDMa:MEAS:MEValuation:LIST:CMWS:CMODe LIST
CONFigure:WCDMa:MEAS:MEValuation:LIST:SEGMent1:CMWS:CONNector R11
CONFigure:WCDMa:MEAS:MEValuation:LIST:SEGMent2:CMWS:CONNector R12
// *****************************************************************************
// Enable the list mode.
// *****************************************************************************
CONFigure:WCDMa:MEAS:MEValuation:LIST ON
Top