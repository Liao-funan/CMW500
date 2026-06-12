# Throughput Measurement

Module: Data Application Unit
Source: 901362bfaeb847a3.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
Throughput Measurement
Throughput Measurement
The commands in this section are related to the throughput measurement. They configure the measurement, control it and return the current measurement state and the measurement results.
List of Commands
SENSe:DATA:MEAS<i>:THRoughput:INTerval?
CONFigure:DATA:MEAS<i>:THRoughput:MCOunt
CONFigure:DATA:MEAS<i>:THRoughput:RAN:MCOunt
CONFigure:DATA:MEAS<i>:THRoughput:RAN:CATaloge?
CONFigure:DATA:MEAS<i>:THRoughput:RAN<Index>
CONFigure:DATA:MEAS<i>:THRoughput:RAN:TRACe:ULINk<Index>
CONFigure:DATA:MEAS<i>:THRoughput:RAN:TRACe:DLINk<Index>
CONFigure:DATA:MEAS<i>:SELect:THRoughput
INITiate:DATA:MEAS<i>:THRoughput
STOP:DATA:MEAS<i>:THRoughput
ABORt:DATA:MEAS<i>:THRoughput
FETCh:DATA:MEAS<i>:THRoughput:STATe?
FETCh:DATA:MEAS<i>:THRoughput:STATe:ALL?
FETCh:DATA:MEAS<i>:THRoughput:TRACe:OVERall:ULINk[:CURRent]?
FETCh:DATA:MEAS<i>:THRoughput:TRACe:OVERall:DLINk[:CURRent]?
READ:DATA:MEAS<i>:THRoughput:TRACe:OVERall:ULINk[:CURRent]?
READ:DATA:MEAS<i>:THRoughput:TRACe:OVERall:DLINk[:CURRent]?
FETCh:DATA:MEAS<i>:THRoughput:TRACe:OVERall:ULINk:EXTended?
FETCh:DATA:MEAS<i>:THRoughput:TRACe:OVERall:DLINk:EXTended?
READ:DATA:MEAS<i>:THRoughput:TRACe:OVERall:ULINk:EXTended?
READ:DATA:MEAS<i>:THRoughput:TRACe:OVERall:DLINk:EXTended?
FETCh:DATA:MEAS<i>:THRoughput:OVERall:ULINk?
READ:DATA:MEAS<i>:THRoughput:OVERall:ULINk?
FETCh:DATA:MEAS<i>:THRoughput:OVERall:DLINk?
READ:DATA:MEAS<i>:THRoughput:OVERall:DLINk?
FETCh:DATA:MEAS<i>:THRoughput:TRACe:RAN:ULINk<Index>:CURRent?
FETCh:DATA:MEAS<i>:THRoughput:TRACe:RAN:DLINk<Index>:CURRent?
READ:DATA:MEAS<i>:THRoughput:TRACe:RAN:ULINk<Index>:CURRent?
READ:DATA:MEAS<i>:THRoughput:TRACe:RAN:DLINk<Index>:CURRent?
FETCh:DATA:MEAS<i>:THRoughput:RAN:DLINk<Index>?
READ:DATA:MEAS<i>:THRoughput:RAN:DLINk<Index>?
FETCh:DATA:MEAS<i>:THRoughput:RAN:ULINk<Index>?
READ:DATA:MEAS<i>:THRoughput:RAN:ULINk<Index>?
FETCh:DATA:MEAS<i>:THRoughput:RAN:TOTal:SUM:ULINk?
READ:DATA:MEAS<i>:THRoughput:RAN:TOTal:SUM:ULINk?
FETCh:DATA:MEAS<i>:THRoughput:RAN:TOTal:SUM:DLINk?
READ:DATA:MEAS<i>:THRoughput:RAN:TOTal:SUM:DLINk?
Top