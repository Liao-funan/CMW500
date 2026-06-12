# CONFigureGPRFMEASiIQRecorderCAPTure

Module: GPRF Measurements
Source: 3d4faf82e1b74f5a.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
I/Q Recorder Commands
 > 
Measurement Control Parameters
 > 
CONFigure:GPRF:MEAS<i>:IQRecorder:CAPTure
CONFigure:GPRF:MEAS<i>:IQRecorder:CAPTure 
<CaptSampBefTrig>, <CaptSampAftTrig>
Selects the total number of samples and their position relative to the trigger event. The total number of samples corresponds to the sum of <CaptSampBefTrig> + <CaptSampAftTrig>.
Configure the two settings so that the maximum supported total number of samples is not exceeded. The maximum allowed value depends on some factors:
4 MSamples (4194304 samples) can always be recorded.
64 MSamples (67108864 samples) can be recorded with an R&S
 
CMW500/2xx with BB Meas if the results are not kept in the memory, only stored to a file.
Parameters:
<CaptSampBefTrig>
Samples before trigger
Range: 
1  to  67108863
*RST:
512
<CaptSampAftTrig>
Samples after trigger
Range: 
1  to  67108863
*RST:
512
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V1.0.4.11
Manual operation: 
See 
"Pre Trigger, Post Trigger"
Top