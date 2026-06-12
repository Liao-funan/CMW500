# SOURceGPRFGENiARBSAMPlesRANGe

Module: GPRF Generator
Source: ceb6665c2c9b457b.htm

## 原始指令文档说明
GPRF Generator
 > 
Command Reference
 > 
ARB Settings
 > 
SOURce:GPRF:GEN<i>:ARB:SAMPles:RANGe
SOURce:GPRF:GEN<i>:ARB:SAMPles:RANGe 
<Range>[, <Start>, <Stop>]
Defines the subrange of samples in the loaded ARB file that are processed by the arbitrary signal generator.
Either the full file (all samples) or a subrange starting with the first sample can be processed.
Parameters:
<Range>
FULL |
 
 SUB
FULL
: The full ARB file is processed.
SUB
: The subrange defined by the <Start> and <Stop> parameters is processed.
*RST:
FULL
<Start>
The beginning (first sample) of the subrange
Range: 
0 (fixed)
<Stop>
The end (last sample) of the subrange
Range: 
16  to  #samples in loaded ARB file - 1
*RST:
16
Firmware/Software: 
V3.0.10
Manual operation: 
See 
"Baseband Configuration > ARB > ARB File"
Top