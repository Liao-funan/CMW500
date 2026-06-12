# CONFigureGSMMEASiMEValuationTOUT

Module: GSM Measurements
Source: 23d287c52dfd4a13.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Statistical Settings
 > 
CONFigure:GSM:MEAS<i>:MEValuation:TOUT
CONFigure:GSM:MEAS<i>:MEValuation:TOUT 
<Timeout>
Defines a timeout for the measurement. The timer is started when the measurement is initiated via a 
READ
 or 
INIT
 command. It is not started if the measurement is initiated manually (ON/OFF key or RESTART/STOP key).
When the measurement has completed the first measurement cycle (first single shot), the statistical depth is reached and the timer is reset.
If the first measurement cycle has not been completed when the timer expires, the measurement is stopped. The measurement state  changes to 
RDY
. The reliability indicator is set to 1, indicating that a measurement timeout occurred. Still running 
READ
, 
FETCh
 or 
CALCulate
 commands are completed, returning the available results. At least for some results, there are no values at all or the statistical depth has not been reached.
A timeout of 0 s corresponds to an infinite measurement timeout.
Parameters:
<Timeout>
Default unit: 
s
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V2.0.10
Top