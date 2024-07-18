import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('Get fortune', () => {
    it('validate type of return equal a number', () => {
      expect(typeof appController.getFortune()).toBe('number');
    });

    it('validate if the number has a size of 4 digits', () => {
      expect(appController.getFortune().toString().length).toBe(4);
    });

    it('validate if the number is positive', () => {
      expect(appController.getFortune()).toBeGreaterThanOrEqual(0);
    });

    it('validate randomness', () => {
      const value1 = appController.getFortune();
      const value2 = appController.getFortune();
      expect(value1).not.toEqual(value2);
    });
  });

  describe('Get fortune string', () => {
    it('validate type of return string', () => {
      jest.spyOn(appService, 'getFortune').mockReturnValue(42);
      expect(typeof appController.getFortuneStr()).toBe('string');
    });

    it('validate return equal to mock data', () => {
      jest.spyOn(appService, 'getFortune').mockReturnValue(58);
      expect(appController.getFortuneStr()).toBe('58');
    });
  });
});
