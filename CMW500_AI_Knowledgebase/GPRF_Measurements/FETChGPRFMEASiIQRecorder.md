# FETChGPRFMEASiIQRecorder

Module: GPRF Measurements
Source: fb25030976f64156.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
I/Q Recorder Commands
 > 
Measurement Results
 > 
FETCh:GPRF:MEAS<i>:IQRecorder?
FETCh:GPRF:MEAS<i>:IQRecorder? 
READ:GPRF:MEAS<i>:IQRecorder? 
Returns the I and Q amplitudes in the format specified by 
FORMat:BASE:DATA
. For a detailed description of the data formats, see 
"ASCII and Binary Data Formats"
.
For the number n of values, see 
CONFigure:
​
GPRF:
​
MEAS<i>:
​
IQRecorder:
​
CAPTure
.
Return values: 
<Reliability>
See 
"Reliability Indicator"
The following values are returned only if the reliability indicator indicates valid results.
<I_1>,<Q_1>, ..., <I_n>,<Q_n>
Returned for ASCII format only
I and Q amplitudes in alternating order.
Range: 
-160 V  to  160 V
Default unit: 
V
<Data>
<dblock>
Returned for REAL format only
Binary block data consisting of the parts listed in the table below. There are no commas within this parameter.
Example: 
See 
"Performing a Single-Shot Measurement"
Usage: 
Query only
Firmware/Software: 
V1.0.4.11
Components of parameter <Data>
Parameter
Description
#L
Number of digits of the following counter N
N
Total number of the following data bytes (N=8*n)
<I_1><Q_1> ...
<I_n><Q_n>
I and Q amplitudes in alternating order. Each amplitude value consists of 4 bytes.
EOS
End of string character
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top