import User from '../models/User';

class ScheduleController {
  async index(req, res) {
    const checkUserProider = await User.findOne({
      where: {
        id: req.userId,
        provider: true,
      },
    });
    if (!checkUserProider) {
      return res.status(400).json({ error: 'User is not a provider' });
    }
    console.log(req.userId);
    return res.json('hehe');
  }
}

export default new ScheduleController();
