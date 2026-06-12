# Pathloss Measurement

Module: GPRF Measurements
Source: 01e9123ed1fc4b6c.htm

## 原始指令文档说明
GPRF Measurements
 > 
Programming
 > 
Pathloss Measurement
Pathloss Measurement
The following example shows you how to configure the pathloss measurement via a remote-control program.
The script measures the pathloss for one signal path (connector R11) and returns the measurement results.
// *************************************************************************
// System-Reset
// *************************************************************************
*RST; *OPC?
*CLS; *OPC?
// *************************************************************************
// Configure a frequency list with 4 entries for connector R11.
// *************************************************************************
CONF:GPRF:MEAS:PLOSs:LIST:FREQuency R11, 4, 100 MHz, 1.6 GHz, 3.6 GHz, 6 GHz
// *************************************************************************
// Configure averaging.
// *************************************************************************
CONFigure:GPRF:MEAS:PLOSs:VIEW:AFTaps 15
// *************************************************************************
// Start a measurement in mode "short".
// *************************************************************************
INITiate:GPRF:MEAS:PLOSs:SHORt R11
// *************************************************************************
// Wait until the measurement is complete. You can insert the following
// command into a loop and wait until the command returns 0,RDY.
// *************************************************************************
FETCh:GPRF:MEAS:PLOSs:SHORt? R11
// *************************************************************************
// Start a measurement in mode "open".
// *************************************************************************
INITiate:GPRF:MEAS:PLOSs:OPEN R11
// *************************************************************************
// Wait until the measurement is complete. You can insert the following
// command into a loop and wait until the command returns 0,RDY.
// *************************************************************************
FETCh:GPRF:MEAS:PLOSs:OPEN? R11
// *************************************************************************
// Start a measurement in mode "eval" to evaluate the previous measurements.
// *************************************************************************
INITiate:GPRF:MEAS:PLOSs:EVALuate R11
// *************************************************************************
// Wait until the measurement is complete. You can insert the following
// command into a loop and wait until the command returns 0,RDY,RDY,RDY.
// *************************************************************************
FETCh:GPRF:MEAS:PLOSs:EVAL:STATe? R11
// *************************************************************************
// Query the result diagram:
// gain values and frequencies at which the gain values have been measured
// *************************************************************************
FETCh:GPRF:MEAS:PLOSs:EVAL:TRACe:GAIN? R11
FETCh:GPRF:MEAS:PLOSs:EVAL:TRACe:FREQuency? R11
// *************************************************************************
// Query the result table:
// gain values and frequencies at which the gain values have been measured
// *************************************************************************
FETCh:GPRF:MEAS:PLOSs:EVAL:GAIN? R11
FETCh:GPRF:MEAS:PLOSs:EVAL:FREQuency? R11
Top