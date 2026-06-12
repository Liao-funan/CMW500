# Configuring a Spectrum Measurement

Module: GSM Measurements
Source: 1a81b7aad6ab4098.htm

## 原始指令文档说明
GSM Measurements
 > 
Programming
 > 
General Examples
 > 
Configuring a Spectrum Measurement
Configuring a Spectrum Measurement
// *************************************************************************
// Spectrum Modulation configuration: Define and enable five frequency
// offsets, define evaluation areas
// *************************************************************************
CONF:GSM:MEAS:MEV:SMODulation:OFRequence 0.1e+6,0.2e+6,0.25e+6,0.4e+6,
    0.6e+6,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF
CONFigure:GSM:MEAS:MEValuation:SMODulation:EARea OFF, 0, 1, ON, 90, 147
// *************************************************************************
// Spectrum Switching configuration: Define and enable five offsets,
// set peak hold mode for spectrum vs. frequency graphs only
// *************************************************************************
CONF:GSM:MEAS:MEV:SSWitching:OFRequence 0.1e+6,0.2e+6,0.25e+6,0.4e+6,
    0.6e+6,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF
CONFigure:GSM:MEAS:MEValuation:SSWitching:PHMode SCO
// *************************************************************************
// Re-start measurement and return spectrum results including limit check
// *************************************************************************
INIT:GSM:MEAS:MEValuation
FETCh:GSM:MEAS:MEValuation:SMODulation:FREQuency?
CALCulate:GSM:MEAS:MEValuation:SMODulation:FREQuency?
FETCh:GSM:MEAS:MEValuation:SSWitching:FREQuency?
CALCulate:GSM:MEAS:MEValuation:SSWitching:FREQuency?
// *************************************************************************
// Enable spectrum vs. time measurements,query all enabled measurements,
// define offset frequencies, retrieve measurement results
// *************************************************************************
CONFigure:GSM:MEAS:MEValuation:RESult:SMTime ON
CONFigure:GSM:MEAS:MEValuation:RESult:SSTime ON
CONFigure:GSM:MEAS:MEValuation:RESult:ALL? 
CONFigure:GSM:MEAS:MEValuation:SMODulation:TDFSelect 21
CONFigure:GSM:MEAS:MEValuation:SSWitching:TDFSelect 22
FETCh:GSM:MEAS:MEValuation:TRACe:SMODulation:TIME?
FETCh:GSM:MEAS:MEValuation:TRACe:SSWitching:TIME?
Top