# Conditions and Restrictions

Module: GSM Measurements
Source: 4312c27ec23a4ba4.htm

## 原始指令文档说明
GSM Measurements
 > 
General Description
 > 
List Mode
 > 
Conditions and Restrictions
Conditions and Restrictions
The list mode parameters, in particular the selected step length or frame pattern, must be compatible with the properties of the measured signal. A *RST at the beginning of the remote control program is recommended.
Initial trigger
The list mode is most conveniently triggered using a "Power" trigger. The measurement must be initiated 
before
 the mobile phone signal is turned on. This method ensures that the measurement starts at the first active timeslot.
Adjustment of analyzer settings
If two consecutive segments are measured at different RF frequencies and expected powers, the R&S
 
CMW must change its analyzer settings after the last measured slot in the first segment. Adjustment starts in the middle of the step length. It means that, with a step length of one timeslot, the last step in the first segment cannot be measured. No restrictions apply to larger step lengths.
Top