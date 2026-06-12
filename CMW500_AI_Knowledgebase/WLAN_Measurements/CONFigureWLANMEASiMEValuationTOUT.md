# CONFigureWLANMEASiMEValuationTOUT

Module: WLAN Measurements
Source: 234d378c4ebb4fac.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Measurement Parameters
 > 
CONFigure:WLAN:MEAS<i>:MEValuation:TOUT
CONFigure:WLAN:MEAS<i>:MEValuation:TOUT 
<TCDTimeout>
Defines a timeout for the measurement. The timer is started when the measurement is initiated via a 
READ
 or 
INIT
 command. It is not started if the measurement is initiated manually ([ON | OFF] key or [RESTART | STOP] key).
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
The measurement of a DSSS signal with low data rate and large payload sizes can take up to 40 s. Set the measurement timeout to an adequate value, e.g. to 60 s.
Parameters:
<TCDTimeout>
Default unit: 
s
Firmware/Software: 
V2.0.10
Top