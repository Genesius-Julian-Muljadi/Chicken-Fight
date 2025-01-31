import prisma from "../../lib/prisma";

export default class DataUtils {
  static async findAllTestimonials() {
    try {
      const findQuizzes = await prisma.testimonials.findMany();
      if (!findQuizzes) throw new Error("Unable to find quizzes");
      if (findQuizzes.length < 1) throw new Error("No quizzes available");

      return findQuizzes;
    } catch (err) {
      throw err;
    }
  }
}
