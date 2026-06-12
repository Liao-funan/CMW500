# SOURceGPRFGENiARBSEGMentsCURRent

Module: GPRF Generator
Source: 671a49916150403e.htm

## 原始指令文档说明
GPRF Generator
 > 
Command Reference
 > 
ARB Trigger and Multi-Segment Settings
 > 
SOURce:GPRF:GEN<i>:ARB:SEGMents:CURRent?
SOURce:GPRF:GEN<i>:ARB:SEGMents:CURRent? 
Queries the number and name of the currently processed segment.
For the repetition "Continuous Seamless", a trigger event has been received for the returned segment. The generator is still processing the previous segment or it is already processing the returned segment. For a distinction of the two cases, see 
SOURce:
​
GPRF:
​
GEN<i>:
​
ARB:
​
STATus?
.
Return values: 
<SegmentNumber>
Integer number. 
NAV
 is returned if no file is loaded.
Range: 
0  to  1000
<SegmentName>
String parameter containing the name. 
NAV
 is returned if no file is loaded or no name is defined.
Example: 
See 
"Using the Arbitrary Mode"
Usage: 
Query only
Firmware/Software: 
V1.0.15.0
Manual operation: 
See 
"Baseband > ARB > Trigger > Multi Segment > Current Segment"
Top