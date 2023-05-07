from abc import ABC,abstractmethod
class Polygon(ABC):
    @abstractmethod
    def noofsides(self):
        pass

class Triangle(Polygon):
    def noofsides(self):
        print("i have 3 sides")

r=Triangle()
r.noofsides()