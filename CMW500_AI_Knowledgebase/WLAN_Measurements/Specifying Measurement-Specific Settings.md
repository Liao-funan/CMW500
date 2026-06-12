# Specifying Measurement-Specific Settings

Module: WLAN Measurements
Source: ba75f5e8aad742ca.htm

## 原始指令文档说明
WLAN Measurements
 > 
Programming
 > 
General Examples
 > 
Specifying Measurement-Specific Settings
Specifying Measurement-Specific Settings
// *****************************************************************************
// Define error handling.
// *****************************************************************************
CONFigure:WLAN:MEAS:MEValuation:SCONdition SLFail
CONFigure:WLAN:MEAS:MEValuation:MOEXception ON
// *****************************************************************************
// Define modulation measurement settings.
// *****************************************************************************
CONFigure:WLAN:MEAS:MEValuation:SCOunt:MODulation 20
CONFigure:WLAN:MEAS:MEValuation:COMPensation:TRACking:PHASe OFF
CONFigure:WLAN:MEAS:MEValuation:COMPensation:TRACking:TIMing OFF
CONFigure:WLAN:MEAS:MEValuation:COMPensation:TRACking:LEVel OFF
CONFigure:WLAN:MEAS:MEValuation:COMPensation:CESTimation PAYL
CONFigure:WLAN:MEAS:MEValuation:DEMod:FFT:OFFSet AUTO
CONFigure:WLAN:MEAS:MEValuation:COMPensation:EFTaps OFF
CONFigure:WLAN:MEAS:MEValuation:EMEThod ST2007
CONFigure:WLAN:MEAS:MEValuation:COMPensation:SKIPsymbols 1, 1
// *****************************************************************************
// Define spectrum measurement settings.
// *****************************************************************************
CONFigure:WLAN:MEAS:MEValuation:SCOunt:TSMask 20
CONFigure:WLAN:MEAS:MEValuation:TSMask:TROTime 0.0001
CONFigure:WLAN:MEAS:MEValuation:TSMask:AFFTnum 5
CONFigure:WLAN:MEAS:MEValuation:TSMask:OBWPercent ON
// *****************************************************************************
// Define power measurement settings.
// *****************************************************************************
CONFigure:WLAN:MEAS:MEValuation:SCOunt:PVTime 20
CONFigure:WLAN:MEAS:MEValuation:PVTime:ALENgth 5
CONFigure:WLAN:MEAS:MEValuation:PVTime:RPOWer MEAN
// *****************************************************************************
// Enable all measurements (DSSS and OFDM).
// ***************************************************************************** 
CONFigure:WLAN:MEAS:MEValuation:RESult ON,ON,ON,ON,ON,ON,ON,ON,ON
Top