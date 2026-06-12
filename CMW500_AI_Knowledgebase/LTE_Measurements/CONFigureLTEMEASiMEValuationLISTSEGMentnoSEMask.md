# CONFigureLTEMEASiMEValuationLISTSEGMentnoSEMask

Module: LTE Measurements
Source: a07de732ac584413.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Settings
 > 
CONFigure:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask
CONFigure:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SEMask 
<SEMstatistics>, <SEenable>, <OBWenable>, <SEMenable>
Defines settings for spectrum emission measurements in list mode for segment <no>.
Suffix: 
<no>
1..2000
Segment number
Parameters:
<SEMstatistics>
Statistical length in slots
Range: 
1  to  1000
*RST:
20
<SEenable>
OFF |
 
 ON
Enable or disable the measurement of spectrum emission results
ON
: Spectrum emission results are measured according to the other enable flags in this command. Results for which there is no explicit enable flag are also measured.
OFF
: No spectrum emission results at all are measured. The other enable flags in this command are ignored.
*RST:
OFF
<OBWenable>
OFF |
 
 ON
Enable or disable measurement of occupied bandwidth
*RST:
OFF
<SEMenable>
OFF |
 
 ON
Enable or disable measurement of spectrum emission trace and margin results
*RST:
OFF
Example: 
See 
"Specifying List Mode Settings"
Firmware/Software: 
V2.0.10
Options: 
R&S CMW-KM012
Top