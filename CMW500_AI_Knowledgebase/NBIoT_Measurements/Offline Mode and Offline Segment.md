# Offline Mode and Offline Segment

Module: NBIoT Measurements
Source: 729042461ba34093.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
General Description
 > 
List Mode
 > 
Offline Mode and Offline Segment
Offline Mode and Offline Segment
In list mode, it is possible to select the results of a single segment for display in the measurement diagram (see also 
"Offline Segment Nr. < List Mode"
). This "offline mode" offers several advantages:
Check of the measurement results (e.g. while developing test scripts)
Calculation and display of additional measurement results (traces). Use the 
FETCh:NIOT:MEAS:MEValuation:TRACe:...
 commands to retrieve these results.
After a list mode measurement is completed, the measurement diagram shows the last segment measured. Calculation of the offline results in an arbitrary segment requires a two-stage measurement:
Start a single-shot list mode measurement (
INITiate:NIOT:MEAS:MEValuation
) to collect all measurement data.
Select the offline segment (
CONFigure:NIOT:MEAS:MEValuation:LIST:OSINdex <Segment>
).
Initiate a second measurement (repeat 
INITiate:NIOT:MEAS:MEValuation
).
Go to local to view the results.
The second measurement stage implies a calculation of all measurement results in the offline segment from the existing raw data. No new measurement data is acquired. By repeating this second stage for different segments, you can obtain a complete set of measurement results over the entire measurement length.
Reconfiguration of the measurement
To obtain consistent results in the second measurement stage, the raw data must still correspond to the measurement settings. Avoid any reconfiguration that would require a new measurement, if you wish to re-use your data in offline mode.
Top