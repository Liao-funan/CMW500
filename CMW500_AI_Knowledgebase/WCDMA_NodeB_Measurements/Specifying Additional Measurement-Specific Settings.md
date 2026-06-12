# Specifying Additional Measurement-Specific Settings

Module: WCDMA NodeB Measurements
Source: 4bae77bb803348f0.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Programming
 > 
Specifying Additional Measurement-Specific Settings
Specifying Additional Measurement-Specific Settings
// *****************************************************************************
// Define stop condition (stop on limit failure), error handling, timeout and
// preselected slot for the single-shot measurements. Query the length ot the
// single-shot measurements.
// *****************************************************************************
CONFigure:WCDMa:MEAS:NB:MEValuation:SCONdition SLFail
CONFigure:WCDMa:MEAS:NB:MEValuation:MOEXception ON
CONFigure:WCDMa:MEAS:NB:MEValuation:TOUT 3600
CONFigure:WCDMa:MEAS:NB:MEValuation:PSLot 12
CONFigure:WCDMa:MEAS:NB:MEValuation:MSCount?
// *****************************************************************************
// Specify modulation measurement settings: measurement over 20 subframes.
// Select slot 0 for the multislot measurements. Set the spreading factor
// for the display of the CD monitor. Set code channel 5 for CDP/CDE vs. slot.
// *****************************************************************************
CONFigure:WCDMa:MEAS:NB:MEValuation:SCOunt:MODulation 20
CONFigure:WCDMa:MEAS:NB:MEValuation:MODulation:SSCalar 0
CONFigure:WCDMa:MEAS:NB:MEValuation:CDMonitor:SFACtor SF256
CONFigure:WCDMa:MEAS:NB:MEValuation:CDPE:CCHannel 5
// *****************************************************************************
// Specify spectrum measurement settings: measurement over 20 subframes.
// *****************************************************************************
CONFigure:WCDMa:MEAS:NB:MEValuation:SCOunt:SPECtrum 20
Top