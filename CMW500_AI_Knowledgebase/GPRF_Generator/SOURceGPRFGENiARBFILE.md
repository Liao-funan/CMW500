# SOURceGPRFGENiARBFILE

Module: GPRF Generator
Source: 15c466bc6a124489.htm

## 原始指令文档说明
GPRF Generator
 > 
Command Reference
 > 
ARB Settings
 > 
SOURce:GPRF:GEN<i>:ARB:FILE
SOURce:GPRF:GEN<i>:ARB:FILE 
<ARBFile>
SOURce:GPRF:GEN<i>:ARB:FILE? 
[<PathType>]
Selects a waveform file, to be used for the arbitrary waveform generator (see 
SOURce:
​
GPRF:
​
GEN<i>:
​
BBMode
).
This command supports path aliases (e.g. 
@WAVEFORM
). Use 
MMEMory:ALIases?
 to discover the available path aliases.
If the selected file does not exist or no file has been selected yet, a query returns 
"No File Selected"
.
If the selected file does exist, a query returns:
Without <PathType>: The string that has been used to select the file. If an alias has been used, the alias is not substituted.
With <PathType>: The absolute path of the file. If an alias has been used to select the file, the alias is substituted.
Parameters:
<ARBFile>
String parameter, specifies the name of the waveform file to be used (
.wv
).
Query parameters: 
<PathType>
ABSPath
Optional parameter, specifying that a query returns the absolute path.
Example: 
See 
"Using the Arbitrary Mode"
Firmware/Software: 
V1.0.0.4, <PathType> added in V3.5.20
Manual operation: 
See 
"Baseband Configuration > ARB > ARB File"
Top