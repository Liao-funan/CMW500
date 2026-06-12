# ROUTeAUDioiSCENario

Module: Audio Measurements
Source: 356ff99ba9214e3e.htm

## 原始指令文档说明
Audio Measurements
 > 
Command Reference
 > 
General Settings
 > 
ROUTe:AUDio<i>:SCENario?
ROUTe:AUDio<i>:SCENario? 
Returns the active scenario and master.
Return values: 
<Scenario>
AMG |
 
 EAS |
 
 EDS |
 
 MISP |
 
 SAS |
 
 SDS |
 
 SST |
 
 ECAL |
 
 WAV
AMG
: audio measurement and generator
EAS
: external analog speech analysis
EDS
: external digital speech analysis
MISP
: microphone- and speaker test
SAS
: stereo external analog speech analysis
SDS
: stereo external digital speech analysis
SST
: stereo speaker test
ECAL
: eCall / ERA-GLONASS
WAV
: waveform
*RST:
AMG
<Master>
String parameter indicating the master application
'No Connection'
 means that no master has been selected. For the scenario AMG, there is never a master.
Usage: 
Query only
Firmware/Software: 
V3.2.10, V3.5.30 SAS and SDS, V3.5.35 SST
V3.7.10 ECAL, V3.7.20 WAV
Manual operation: 
See 
"Global scenario commands"
Top