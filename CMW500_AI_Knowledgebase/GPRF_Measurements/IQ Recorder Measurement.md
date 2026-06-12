# IQ Recorder Measurement

Module: GPRF Measurements
Source: 704cef093e014ef6.htm

## 原始指令文档说明
GPRF Measurements
 > 
General Description
 > 
I/Q Recorder Measurement
I/Q Recorder Measurement
The I/Q recorder measurement provides the I/Q amplitudes that the R&S
 
CMW acquires with different IF filter settings. The results are returned in ASCII or binary format. The binary data can be stored to a file.
A part of the I/Q recorder measurement is available in remote control only. A programming example is given in 
"I/Q Recorder Measurement"
. The key parameters are set via the following remote control commands.
I/Q recorder commands
Parameters
SCPI commands
No. of captured samples
CONFigure:
​
GPRF:
​
MEAS<i>:
​
IQRecorder:
​
CAPTure
Filter settings
CONFigure:GPRF:MEAS<i>:IQRecorder:FILTer...
See 
"Filter Settings"
Data format
FORMat:BASE:DATA
File for binary results
CONFigure:
​
GPRF:
​
MEAS<i>:
​
IQRecorder:
​
IQFile
Control measurement
INITiate:GPRF:MEAS<i>:IQRecorder
 etc.
See 
"Measurement Control and States"
Retrieve results
FETCh:GPRF:MEAS<i>:IQRecorder?
 etc.
See 
"Measurement Results"
Configure list mode
CONFigure:GPRF:MEAS<i>:IQRecorder:LIST...
See 
"List Configuration"
Contents
Test Setup
Filter Settings and Samples
ASCII and Binary Data Formats
Result Diagrams
List Mode
Top