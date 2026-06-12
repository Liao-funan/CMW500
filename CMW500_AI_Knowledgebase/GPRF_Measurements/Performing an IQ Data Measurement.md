# Performing an IQ Data Measurement

Module: GPRF Measurements
Source: 733a8712c34a43a4.htm

## 原始指令文档说明
GPRF Measurements
 > 
Programming
 > 
Power Measurement
 > 
Performing an I/Q Data Measurement
Performing an I/Q Data Measurement
// *************************************************************************
// System-Reset
// *************************************************************************
*RST; *OPC?
*CLS; *OPC?
// *************************************************************************
// Configure the extended list mode: 
// Parameter set no. 0 for WCDMA, parameter set 1 for GSM.
// ************************************************************************* 
CONFigure:GPRF:MEAS:POWer:PSET:FILTer:TYPE 0, BANDpass
CONFigure:GPRF:MEAS:POWer:PSET:FILTer:TYPE 1, GAUSs
CONFigure:GPRF:MEAS:POWer:PSET:FILTer:TYPE:ALL?
CONFigure:GPRF:MEAS:POWer:PSET:FILTer:BWIDth 0, 5MHz
CONFigure:GPRF:MEAS:POWer:PSET:FILTer:BWIDth 1, 500kHz
CONFigure:GPRF:MEAS:POWer:PSET:FILTer:BWIDth:ALL?
CONFigure:GPRF:MEAS:POWer:PSET:SLENgth 0, 666.667us
CONFigure:GPRF:MEAS:POWer:PSET:SLENgth 1, 576.923us
CONFigure:GPRF:MEAS:POWer:PSET:SLENgth:ALL?
CONFigure:GPRF:MEAS:POWer:PSET:MLENgth 0, 566.667us
CONFigure:GPRF:MEAS:POWer:PSET:MLENgth 1, 476.923us
CONFigure:GPRF:MEAS:POWer:PSET:MLENgth:ALL?
TRIGger:GPRF:MEAS:POWer:PSET:OFFSet 0, 5.0e-5
TRIGger:GPRF:MEAS:POWer:PSET:OFFSet 1, 5.0e-5
TRIGger:GPRF:MEAS:POWer:PSET:OFFSet:ALL?
// *************************************************************************
// Activate the extended list mode: ensure appropriate trigger settings, 
// assign parameter set no. 0 and 1 to the first two steps. 
// ************************************************************************* 
CONFigure:GPRF:MEAS:POWer:LIST ON
CONFigure:GPRF:MEAS:POWer:LIST:STARt 0
CONFigure:GPRF:MEAS:POWer:LIST:STOP 1
CONFigure:GPRF:MEAS:POWer:LIST:RETrigger 1, ON
TRIGger:GPRF:MEAS:POWer:MODE PRESelect
CONFigure:GPRF:MEAS:POWer:PSET LIST
CONFigure:GPRF:MEAS:POWer:LIST:PSET 0, 0
CONFigure:GPRF:MEAS:POWer:LIST:PSET 1, 1
CONFigure:GPRF:MEAS:POWer:LIST:PSET:ALL?
// *************************************************************************
// Activate I/Q data measurement for both steps.  
// ************************************************************************* 
CONFigure:GPRF:MEAS:POWer:LIST:IQData:CAPTure ON
CONFigure:GPRF:MEAS:POWer:LIST:MUNit VOLT
CONFigure:GPRF:MEAS:POWer:LIST:IQData 0, ON
CONFigure:GPRF:MEAS:POWer:LIST:IQData 1, ON
CONFigure:GPRF:MEAS:POWer:LIST:IQData:ALL?
// *************************************************************************
// Check sampling rate for I/Q data measurement and number of samples.
// The total no. of samples must be below 4.000.000. 
// Start single-shot measurement and return I/Q data in both steps.
// ************************************************************************* 
FETCh:GPRF:MEAS:POWer:IQINfo? 0
FETCh:GPRF:MEAS:POWer:IQINfo? 1
INITiate:GPRF:MEAS:POWer; *WAI
FETCh:GPRF:MEAS:POWer:IQData? 0
FETCh:GPRF:MEAS:POWer:IQData? 1
FETCh:GPRF:MEAS:POWer:IQData:BIN? 0
FETCh:GPRF:MEAS:POWer:IQData:BIN? 1
SYSTem:ERRor?
Top