# Performing a Single-Shot Measurement

Module: GPRF Measurements
Source: 58179e3f7c254f4f.htm

## 原始指令文档说明
GPRF Measurements
 > 
Programming
 > 
External Power Sensor Measurement
 > 
Performing a Single-Shot Measurement
Performing a Single-Shot Measurement
// *************************************************************************
// System-Reset
// *************************************************************************
*RST; *OPC?    
*CLS; *OPC?
// *************************************************************************
// Set a measurement-specific timeout value of 1 s.
// Configure statistics, sensor frequency and an external attenuation
// factor of 2 dB to correct the sensor reading. Display results with
// low resolution (rounded to 1 dB, this does not affect remote control).
// *************************************************************************
CONFigure:GPRF:MEAS:EPSensor:TOUT 1
CONFigure:GPRF:MEAS:EPSensor:SCOunt 20
CONFigure:GPRF:MEAS:EPSensor:FREQuency 1.922E+9
CONFigure:GPRF:MEAS:EPSensor:ATTenuation:STATe ON
CONFigure:GPRF:MEAS:EPSensor:ATTenuation 2
CONFigure:GPRF:MEAS:EPSensor:RESolution PD0
// *************************************************************************
// Start the measurement, return results and state (should be RDY).
// Query all measurement states (should be RDY, ADJ, ACT). Read sensor ID.
// *************************************************************************
READ:GPRF:MEAS:EPSensor?
FETCh:GPRF:MEAS:EPSensor:STATe?
FETCh:GPRF:MEAS:EPSensor:STATe:ALL?
CONFigure:GPRF:MEAS:EPSensor:IDN?
Top