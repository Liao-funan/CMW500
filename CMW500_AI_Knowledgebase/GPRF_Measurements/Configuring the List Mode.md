# Configuring the List Mode

Module: GPRF Measurements
Source: 98221d922a3f46cb.htm

## 原始指令文档说明
GPRF Measurements
 > 
Programming
 > 
I/Q vs. Slot Measurement
 > 
Configuring the List Mode
Configuring the List Mode
// *************************************************************************
// Set up a measurement in list mode and over 5 subsweeps.
// Query no. of measurement steps (5 times the step count = 40).
// Configure the list frequencies and expected nominal powers.
// *************************************************************************
CONFigure:GPRF:MEAS:IQVSlot:LIST ON
CONFigure:GPRF:MEAS:IQVSlot:LIST:STARt 0
CONFigure:GPRF:MEAS:IQVSlot:LIST:STOP 4
CONFigure:GPRF:MEAS:IQVSlot:LIST:COUNt?
CONFigure:GPRF:MEAS:IQVSlot:LIST:FREQuency? 0
CONFigure:GPRF:MEAS:IQVSlot:LIST:FREQuency 0, 7.55E+8; FREQuency 1, 7.56E+8
CONFigure:GPRF:MEAS:IQVSlot:LIST:FREQuency:ALL 7.55E+8, 7.56E+8
CONFigure:GPRF:MEAS:IQVSlot:LIST:ENPower:ALL?
CONFigure:GPRF:MEAS:IQVSlot:LIST:ENPower? 0
CONFigure:GPRF:MEAS:IQVSlot:LIST:ENPower 0, -5; ENPower 1, -5
CONFigure:GPRF:MEAS:IQVSlot:LIST:ENPower:ALL -5, -5
Top