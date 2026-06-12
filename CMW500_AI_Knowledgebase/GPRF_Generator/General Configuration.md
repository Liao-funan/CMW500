# General Configuration

Module: GPRF Generator
Source: 872915d6f4424aee.htm

## 原始指令文档说明
GPRF Generator
 > 
Programming
 > 
General Configuration
General Configuration
The GPRF generator is programmed as follows:
The generator is controlled by SCPI commands with the following syntax: 
...GPRF:GEN:...
After a 
*RST
, the generator is switched off.
To switch it on, use 
SOURce:GPRF:GEN:STATe ON
. 
*OPC?
 ensures that the generator signal is available at the selected RF output before the next command line is executed.
Top