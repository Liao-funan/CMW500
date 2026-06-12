# Basic Input Signal Properties

Module: LRWPAN Measurements
Source: 12bddb5a68b74150.htm

## 原始指令文档说明
LR-WPAN TX Measurement
 > 
Programming
 > 
Basic Input Signal Properties
Basic Input Signal Properties
// *************************************************************************
// Set the physical layer of input signal to basic rate: O-QPSK, 2450 MHz.
// *************************************************************************
CONFigure:WPAN:MEAS:ISIGnal:MTYPe OQ24
 
// *************************************************************************
// Reduce the trigger threshold and timeout, set minimal gap.
// *************************************************************************
TRIGger:WPAN:MEAS:MEValuation:THREShold -25
TRIGger:WPAN:MEAS:MEValuation:TOUT 1
TRIGger:WPAN:MEAS:MEValuation:MGAP 0.01
WAITKEY >Trigger settings completed, press "OK" to define limits<
Top