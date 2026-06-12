# CONFigureGPRFMEASiIQRecorderIQFile

Module: GPRF Measurements
Source: e1ed1222b0fd4e1b.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
I/Q Recorder Commands
 > 
Measurement Control Parameters
 > 
CONFigure:GPRF:MEAS<i>:IQRecorder:IQFile
CONFigure:GPRF:MEAS<i>:IQRecorder:IQFile 
<IQSaveFile>
Selects the name and path of a file that is used to store the I/Q recorder results in binary format. To write the file, the I/Q recorder measurement must be started using 
INITiate:GPRF:MEAS<i>:IQRecorder ON
.
Parameters:
<IQSaveFile>
String parameter to specify the name and path of the I/Q file. The extension "*.iqw" is appended automatically.
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V1.0.4.11
Manual operation: 
See 
"Select File, File Name"
Top